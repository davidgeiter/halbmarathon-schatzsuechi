package shop.halbmarathon.halbmarathonschatzsuechi.highscore;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.Athlete;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyRepository;

@Service
@RequiredArgsConstructor
public class HighscoreService {

	final CurrencyRepository currencyRepository;

	public ScoresDto getHighscores() {
		final List<Score> scores = currencyRepository.findAll().stream()
				.sorted(Comparator.comparingInt(Athlete::getTotalCodesAsInt))
				.map(a -> new Score(a.getTotalCodesFound(), a.getUsername()))
				.collect(Collectors.toList());
		Collections.reverse(scores);
		final List<Score> result = scores.stream().limit(10).collect(Collectors.toList());
		return new ScoresDto(result);
	}
}
