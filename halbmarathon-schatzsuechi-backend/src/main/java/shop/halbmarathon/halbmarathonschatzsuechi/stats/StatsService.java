package shop.halbmarathon.halbmarathonschatzsuechi.stats;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.Athlete;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyService;

@Service
@RequiredArgsConstructor
public class StatsService {
	
	private final CurrencyService currencyService;

	public StatsDto getStats(final String username) {
		final Athlete athlete = currencyService.getAthleteByUsername(username);
		return StatsDto.builder()
				.currentCurrency(athlete.getCurrentCurrency())
				.totalCurrency(athlete.getTotalCurrency())
				.totalSpent(athlete.getMaximumSpent())
				.totalCodesFound(athlete.getTotalCodesFound())
				.username(athlete.getUsername())
				.build();
	}
}
