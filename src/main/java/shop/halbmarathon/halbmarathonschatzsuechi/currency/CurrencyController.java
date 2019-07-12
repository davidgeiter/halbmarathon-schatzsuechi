package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.awt.*;
import java.math.BigInteger;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CurrencyController {

	private final CurrencyService currencyService;

	@PostMapping(value = "/api/currency/{qrId}", produces = "application/json")
	public ResponseDto moneymoney(@PathVariable final BigInteger qrId, @RequestParam String username) {
		return currencyService.moneymoney(qrId, username);
	}
}
