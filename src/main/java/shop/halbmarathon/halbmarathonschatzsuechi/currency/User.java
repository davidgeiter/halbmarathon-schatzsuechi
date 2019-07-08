package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Builder
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "UserIdGenerator")
	@SequenceGenerator(name = "UserIdGenerator", sequenceName = "USER_ID_SEQ", allocationSize = 1)
	private Long id;

	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "user")
	@Setter(AccessLevel.NONE)
	private List<QrCode> codes;

	@Lob
	private byte[] macAddress;

	private String username;
	private BigInteger totalCurrency;
	private BigInteger currentCurrency;
	private BigInteger maximumSpent;



	public void addQrCode(final QrCode code) {
		if (codes == null) {
			setEmptyQrCodeList();
		}
		code.setUser(this);
		codes.add(code);
	}

	public void setEmptyQrCodeList() {
		codes = new ArrayList<>();
	}

	public boolean qrCodeExists(final BigInteger qrCode) {
		return codes.stream().anyMatch(c -> c.getCode() == qrCode);
	}

}
