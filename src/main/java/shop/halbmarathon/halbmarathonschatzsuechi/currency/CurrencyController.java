package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class CurrencyController {

	private final CurrencyService currencyService;

	@PostMapping(value = "/api/currency/{qrId}")
	public void moneymoney(@PathVariable final BigInteger qrId, @RequestParam String username) {
		currencyService.moneymoney(qrId, username);
	}
}
