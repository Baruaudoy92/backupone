-- Table: public.Clients

-- DROP TABLE IF EXISTS public."Clients";

CREATE TABLE IF NOT EXISTS public."Clients"
(
    client_id integer NOT NULL DEFAULT nextval('"Clients_client_id_seq"'::regclass),
    first_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(255) COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    birth_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Clients_pkey" PRIMARY KEY (client_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Clients"
    OWNER to postgres;

    -- Table: public.Mangas

-- DROP TABLE IF EXISTS public."Mangas";

CREATE TABLE IF NOT EXISTS public."Mangas"
(
    manga_id integer NOT NULL DEFAULT nextval('"Mangas_manga_id_seq"'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    author character varying(255) COLLATE pg_catalog."default" NOT NULL,
    publication_date timestamp with time zone NOT NULL,
    genre character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    stock_quantity integer,
    image character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Mangas_pkey" PRIMARY KEY (manga_id),
    CONSTRAINT "Mangas_author_key" UNIQUE (author)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Mangas"
    OWNER to postgres;