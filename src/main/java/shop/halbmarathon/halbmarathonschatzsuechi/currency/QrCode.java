package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = "user")
@EqualsAndHashCode(exclude = "user")
public class QrCode {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "QrCodeIdGenerator")
	@SequenceGenerator(name = "QrCodeIdGenerator", sequenceName = "QR_CODE_ID_SEQ", allocationSize = 1)
	private Long id;

	private BigInteger code;

	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USER_ID", nullable = false)
	private User user;

	public QrCode(final BigInteger code){
		this.code = code;
	}
}
