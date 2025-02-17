import TSON from "typescript-json";
import api from "../../api";
import { ISeller } from "../../api/structures/ISeller";

export async function test_seller_login(
    connection: api.IConnection,
): Promise<void> {
    const seller: ISeller = await api.functional.sellers.authenticate.login(
        connection,
        {
            email: "someone@someone.com",
            password: "qweqwe123!",
        },
    );
    TSON.assertType(seller);
}
