import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-8450248338878252-090414-2a2ae4250848ddeabfd96dd510aa1ef5-1046078811' });


const app = express()
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("servidor");
});

app.post("/create_preference", async (req,res) => {
    try{
        const body = {
            items: [
                {
                    title: req.body.title, 
                    quantity: Number(req.body.quantity),
                    unit_price:Number(req.body.price),
                    currency_id: "COP",
                },
            ],
            //DEBO MODIFICAR LOS URLS DEPENDIENDO DE LA SITUACION
            back_urls: {
                success: "https://www.google.com/",
                failure: "https://www.google.com/",
                pending: "https://www.google.com/"
            },
            auto_return: "approved",
        };
        const preference = new Preference(client);
        const result = await preference.create({ body });   
        res.json({
            id: result.id,
        });
    }catch (error){
        console.log(error)
        res.status(500).json({
            error: "Error al crear la preferencia :("
        });
    }
});

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
})