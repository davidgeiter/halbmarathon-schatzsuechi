package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CurrencyService {

	private final CurrencyRepository currencyRepository;

	public ResponseDto moneymoney(final String qrId, final String username) {
		final Athlete athlete = getAthleteByUsername(username);

		final Optional<QrCodeDto> optionalCode = getQrCode(qrId);

		if (!optionalCode.isPresent()) {
			return new ResponseDto(null, athlete.getTotalCurrency(), Status.INVALID_CODE);
		}

		final QrCodeDto code = optionalCode.orElseThrow(() -> new IllegalStateException("no QR code present"));

		if (athlete.qrCodeExists(code.getCode())) {
			return new ResponseDto(code.getDifference(), athlete.getCurrentCurrency(), Status.ALREADY_SCANNED);
		} else {
			if (code.getDifference().add(athlete.getCurrentCurrency()).compareTo(BigInteger.ZERO) < 0) {
				return new ResponseDto(code.getDifference(), athlete.getCurrentCurrency(), Status.NOT_ENOUGH_CASH);
			}
			updateUser(athlete, code);
			return new ResponseDto(code.getDifference(), athlete.getCurrentCurrency(), Status.SUCCESS);
		}
	}

	public Athlete getAthleteByUsername(final String username) {
		return currencyRepository.findAll().stream()
				.filter(a -> username.equals(a.getUsername()))
				.findAny().orElseGet(() -> createNewUser(username));
	}

	public boolean doesUsernameExist(final String username) {
		return currencyRepository.findAll().stream()
				.anyMatch(a -> username.equals(a.getUsername()));
	}

	private Optional<QrCodeDto> getQrCode(final String qrId) {
		List<List<String>> records = new ArrayList<>();
		try (BufferedReader br = new BufferedReader(new FileReader("halbmarathon-schatzsuechi-backend/src/main/resources/qrCodes.csv"))) {
			String line;
			while ((line = br.readLine()) != null) {
				String[] values = line.split(",");
				records.add(Arrays.asList(values));
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return records.stream().map(this::mapToQrCodeDto)
				.filter(c -> qrId.equals(c.getCode()))
				.findAny();
	}

	private QrCodeDto mapToQrCodeDto(final List<String> c) {
		return QrCodeDto.builder()
				.code(c.get(0))
				.difference(new BigInteger(c.get(1)))
				.isValid(true)
				.build();
	}

	public Athlete createNewUser(final String username) {
		final Athlete athlete = Athlete.builder()
				.username(username)
				.currentCurrency(BigInteger.ZERO)
				.totalCurrency(BigInteger.ZERO)
				.maximumSpent(BigInteger.ZERO)
				.totalCodesFound(BigInteger.ZERO)
				.build();
		return currencyRepository.save(athlete);
	}

	private void updateUser(final Athlete athlete, final QrCodeDto code) {
		if (code.getDifference().signum() == 1) { // bigger than 0
			athlete.setTotalCodesFound(athlete.getTotalCodesFound().add(BigInteger.ONE));
			athlete.setTotalCurrency(athlete.getTotalCurrency().add(code.getDifference()));
			athlete.addQrCode(new QrCode(code.getCode(), code.getDifference()));
		} else {
			athlete.setMaximumSpent(athlete.getMaximumSpent().add(code.getDifference().abs()));
		}
		athlete.setCurrentCurrency(athlete.getCurrentCurrency().add(code.getDifference()));
		currencyRepository.save(athlete);
	}
}

