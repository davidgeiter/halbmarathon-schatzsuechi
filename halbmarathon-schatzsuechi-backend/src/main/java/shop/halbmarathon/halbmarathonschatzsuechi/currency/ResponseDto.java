package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseDto {

	private BigInteger difference;
	private BigInteger currentCurrency;
	private Status status;

}
