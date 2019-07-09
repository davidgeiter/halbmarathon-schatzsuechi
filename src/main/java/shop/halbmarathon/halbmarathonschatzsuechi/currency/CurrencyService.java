package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CurrencyService {

	private final CurrencyRepository currencyRepository;

	public void moneymoney(final BigInteger qrId, final byte[] macAddress) {
		final Athlete athlete = currencyRepository.findAll().stream()
													  .filter(u -> Arrays.equals(u.getMacAddress(), macAddress))
													  .findAny().orElseGet(() -> createNewUser(qrId, macAddress));
		if (!athlete.qrCodeExists(qrId)) {
			updateUser(athlete, qrId);
		}
	}

	//TODO: handle username
	private Athlete createNewUser(final BigInteger qrId, final byte[] macAddress) {
		final Athlete athlete = Athlete.builder()
				.username("defaultname")
				.macAddress(macAddress)
				.currentCurrency(BigInteger.ONE)
				.totalCurrency(BigInteger.ONE)
				.maximumSpent(BigInteger.ZERO)
				.codes(Collections.singletonList(new QrCode(qrId)))
				.build();
		return currencyRepository.save(athlete);
	}

	private void updateUser(final Athlete athlete, final BigInteger qrId) {
		athlete.setCurrentCurrency(athlete.getCurrentCurrency().add(BigInteger.ONE));
		athlete.addQrCode(new QrCode(qrId));
		currencyRepository.save(athlete);
	}
}

