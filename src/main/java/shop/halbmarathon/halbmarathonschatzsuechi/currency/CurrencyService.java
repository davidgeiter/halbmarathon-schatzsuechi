package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;
import java.util.Collections;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CurrencyService {

	private final CurrencyRepository currencyRepository;

	public void moneymoney(final BigInteger qrId, final String username) {
		final Athlete athlete = currencyRepository.findAll().stream()
													  .filter(a -> username.equals(a.getUsername()))
													  .findAny().orElseGet(() -> createNewUser(qrId, username));
		if (!athlete.qrCodeExists(qrId)) {
			updateUser(athlete, qrId);
		}
	}

	private Athlete createNewUser(final BigInteger qrId, final String username) {
		final Athlete athlete = Athlete.builder()
				.username(username)
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

