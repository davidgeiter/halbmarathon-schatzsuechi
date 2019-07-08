package shop.halbmarathon.halbmarathonschatzsuechi.pay;

import java.math.BigInteger;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyRepository;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.User;

@Service
@RequiredArgsConstructor
public class PayService {

	private final CurrencyRepository currencyRepository;

	public void pay(final BigInteger amount, final byte[] macAddress) {
		final User user = currencyRepository.findAll().stream()
				.filter(u -> Arrays.equals(u.getMacAddress(), macAddress))
				.findAny().orElseThrow(() -> new IllegalStateException("User does not exist"));
		user.setCurrentCurrency(user.getCurrentCurrency().subtract(amount));
		user.setMaximumSpent(user.getMaximumSpent().add(amount));
		currencyRepository.save(user);
	}
}
