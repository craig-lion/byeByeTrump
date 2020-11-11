USE DATABASE lion

DROP TABLE IF EXISTS cities
;
CREATE TABLE cities
(
  city VARCHAR,
  city_ascii VARCHAR,
  lat VARCHAR,
  lng VARCHAR,
  country VARCHAR,
  so2 VARCHAR,
  iso3 VARCHAR,
  admin_name VARCHAR,
  cap VARCHAR,
  pop VARCHAR,
  id VARCHAR
);

COPY cities 
  FROM '/Users/lion/Desktop/ByeByeTrump/byebyetrump/worldcities.csv'
  WITH
  (
    FORMAT csv,
    HEADER TRUE
  );

