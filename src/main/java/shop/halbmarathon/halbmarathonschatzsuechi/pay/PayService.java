package shop.halbmarathon.halbmarathonschatzsuechi.pay;

import java.math.BigInteger;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyRepository;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.Athlete;

@Service
@RequiredArgsConstructor
public class PayService {

	private final CurrencyRepository currencyRepository;

	public void pay(final BigInteger amount, final String username) {
		final Athlete athlete = currencyRepository.findAll().stream()
				.filter(a -> username.equals(a.getUsername()))
				.findAny().orElseThrow(() -> new IllegalStateException("User does not exist"));
		athlete.setCurrentCurrency(athlete.getCurrentCurrency().subtract(amount));
		athlete.setMaximumSpent(athlete.getMaximumSpent().add(amount));
		currencyRepository.save(athlete);
	}
}
