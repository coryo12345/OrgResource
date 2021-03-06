CREATE GROUP web;

CREATE USER webservice WITH PASSWORD 'tempwebpassword' IN GROUP web;
CREATE USER appservice WITH PASSWORD 'tempapppassword' IN GROUP web;

REVOKE CONNECT ON DATABASE org FROM PUBLIC;
GRANT CONNECT ON DATABASE org TO web;

GRANT USAGE ON SCHEMA orgdev TO web;

GRANT SELECT                         ON ALL TABLES IN SCHEMA orgdev TO web;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA orgdev TO webservice;