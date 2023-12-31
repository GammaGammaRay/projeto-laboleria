PGDMP     8                     {         	   laboleria    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    25294 	   laboleria    DATABASE     �   CREATE DATABASE laboleria WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE laboleria;
                postgres    false            �            1259    25438    cakes    TABLE     �   CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    image character varying(255),
    description text,
    "flavourId" integer NOT NULL
);
    DROP TABLE public.cakes;
       public         heap    postgres    false            �            1259    25437    cakes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.cakes_id_seq;
       public          postgres    false    219                       0    0    cakes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;
          public          postgres    false    218            �            1259    25406    clients    TABLE       CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    phone character varying(11) NOT NULL,
    CONSTRAINT phone_length CHECK (((length((phone)::text) = 10) OR (length((phone)::text) = 11)))
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    25405    clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          postgres    false    215                        0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          postgres    false    214            �            1259    25431    flavours    TABLE     d   CREATE TABLE public.flavours (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.flavours;
       public         heap    postgres    false            �            1259    25430    flavours_id_seq    SEQUENCE     �   CREATE SEQUENCE public.flavours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.flavours_id_seq;
       public          postgres    false    217            !           0    0    flavours_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.flavours_id_seq OWNED BY public.flavours.id;
          public          postgres    false    216            �            1259    25454    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer,
    "cakeId" integer,
    quantity smallint NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "totalPrice" numeric(12,2) NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    25453    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    221            "           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    220            v           2604    25441    cakes id    DEFAULT     d   ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);
 7   ALTER TABLE public.cakes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            t           2604    25409 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            u           2604    25434    flavours id    DEFAULT     j   ALTER TABLE ONLY public.flavours ALTER COLUMN id SET DEFAULT nextval('public.flavours_id_seq'::regclass);
 :   ALTER TABLE public.flavours ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            w           2604    25457 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2606    25447    cakes cakes_name_unique 
   CONSTRAINT     R   ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_name_unique UNIQUE (name);
 A   ALTER TABLE ONLY public.cakes DROP CONSTRAINT cakes_name_unique;
       public            postgres    false    219            �           2606    25445    cakes cakes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cakes DROP CONSTRAINT cakes_pkey;
       public            postgres    false    219            {           2606    25416    clients client_address_unique 
   CONSTRAINT     [   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT client_address_unique UNIQUE (address);
 G   ALTER TABLE ONLY public.clients DROP CONSTRAINT client_address_unique;
       public            postgres    false    215            }           2606    25414    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    215                       2606    25436    flavours flavours_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.flavours
    ADD CONSTRAINT flavours_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.flavours DROP CONSTRAINT flavours_pkey;
       public            postgres    false    217            �           2606    25460    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    221            �           2606    25448    cakes cakes_flavourId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT "cakes_flavourId_fkey" FOREIGN KEY ("flavourId") REFERENCES public.flavours(id);
 F   ALTER TABLE ONLY public.cakes DROP CONSTRAINT "cakes_flavourId_fkey";
       public          postgres    false    3199    217    219            �           2606    25466    orders orders_cakeId_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES public.cakes(id);
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_cakeId_fkey";
       public          postgres    false    219    221    3203            �           2606    25476    orders orders_cake_fk    FK CONSTRAINT     u   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_cake_fk FOREIGN KEY ("cakeId") REFERENCES public.cakes(id);
 ?   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_cake_fk;
       public          postgres    false    219    221    3203            �           2606    25461    orders orders_clientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id);
 G   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_clientId_fkey";
       public          postgres    false    215    221    3197            �           2606    25471    orders orders_client_fk    FK CONSTRAINT     {   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_client_fk FOREIGN KEY ("clientId") REFERENCES public.clients(id);
 A   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_client_fk;
       public          postgres    false    3197    221    215           