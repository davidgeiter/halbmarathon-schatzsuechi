package shop.halbmarathon.halbmarathonschatzsuechi.stats;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class StatsController {

	private final StatsService statsService;

	@GetMapping(value = "/api/stats", produces = "application/json")
	public StatsDto getStats(@RequestParam String username) {
		return statsService.getStats(username);
	}
}
