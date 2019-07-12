package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QrCodeDto {

	private String code;
	private BigInteger difference;
	private Boolean isValid;

}
