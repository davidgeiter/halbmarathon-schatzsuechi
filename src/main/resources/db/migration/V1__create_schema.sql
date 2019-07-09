CREATE SEQUENCE "ATHLETE_ID_SEQ"
  MINVALUE 0
  MAXVALUE 9223372036854775807
  CACHE 10;
CREATE TABLE "ATHLETE" (
  "ID"                        NUMBER(19) PRIMARY KEY,
  "MAC_ADDRESS"               BLOB,
  "USERNAME"                  VARCHAR2(255 CHAR),
  "CURRENT_CURRENCY"          NUMBER(19),
  "TOTAL_CURRENCY"            NUMBER(19),
  "MAXIMUM_SPENT"             NUMBER(19)
);