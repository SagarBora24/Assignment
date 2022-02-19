CREATE PROCEDURE 'CUSTOMERAddOrEdit'(
    IN _ID int,
    IN _Name varchar(100)
)
BEGIN 
    IF _ID = 0 THEN
        INSERT INTO customers(Name)
        VALUES (_Name)

        SET _ID = LAST_INSERT_ID();

    ELSE
        UPDATE customers
        SET
        Name = _Name
        where Id = _ID;
    End IF;

    SELECT _ID AS 'ID';

END