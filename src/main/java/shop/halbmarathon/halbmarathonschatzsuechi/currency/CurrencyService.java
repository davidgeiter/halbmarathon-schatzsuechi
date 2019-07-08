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
		final User user = currencyRepository.findAll().stream()
													  .filter(u -> Arrays.equals(u.getMacAddress(), macAddress))
													  .findAny().orElseGet(() -> createNewUser(qrId, macAddress));
		if (!user.qrCodeExists(qrId)) {
			updateUser(user, qrId);
		}
	}

	//TODO: handle username
	private User createNewUser(final BigInteger qrId, final byte[] macAddress) {
		final User user = User.builder()
				.username("defaultname")
				.macAddress(macAddress)
				.currentCurrency(BigInteger.ONE)
				.totalCurrency(BigInteger.ONE)
				.maximumSpent(BigInteger.ZERO)
				.codes(Collections.singletonList(new QrCode(qrId)))
				.build();
		return currencyRepository.save(user);
	}

	private void updateUser(final User user, final BigInteger qrId) {
		user.setCurrentCurrency(user.getCurrentCurrency().add(BigInteger.ONE));
		user.addQrCode(new QrCode(qrId));
		currencyRepository.save(user);
	}
}

