import {
    GeoAltFill,
    Whatsapp
} from "react-bootstrap-icons";

import pedidosYa from "../../assets/pedidosya.png";
import ball from "../../assets/ball_icon.png";

import { FloatingButton } from "../atoms/FloatingButton";

export function FloatingMenu() {

    return (

        <div
            className="position-fixed d-flex flex-column gap-3"
            style={{
                right: "20px",
                bottom: "20px",
                zIndex: 1050
            }}
        >

            <FloatingButton
                icon={
                    <img
                        src={ball}
                        width={26}
                    />
                }
                color="warning"
            />

            <FloatingButton
                href="https://maps.app.goo.gl/6BQe2BgBo9Qgg9fUA"
                icon={<GeoAltFill size={22} />}
                color="primary"
            />

            <FloatingButton
                href="https://www.pedidosya.com.ar/restaurantes/bahia-blanca/bastardo-coffee-35dcaafd-4cec-4135-922f-9bbf3fd080c9-menu?origin=shop_list"
                icon={
                    <img
                        src={pedidosYa}
                        width={26}
                    />
                }
                color="danger"
            />

            <FloatingButton
                href="https://wa.me/5492914050815"
                icon={<Whatsapp size={22} />}
                color="success"
            />

        </div>

    );

}