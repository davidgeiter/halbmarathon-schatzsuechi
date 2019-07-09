package shop.halbmarathon.halbmarathonschatzsuechi.highscore;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyRepository;

@Service
@RequiredArgsConstructor
public class HighscoreService {

	final CurrencyRepository currencyRepository;

	public ScoresDto getHighscores() {
		final List<Score> scores = currencyRepository.findAll().stream()
				.sorted()
				.limit(10)
				.map(a -> new Score(a.getTotalCurrency()))
				.collect(Collectors.toList());
		return new ScoresDto(scores);
	}
}
