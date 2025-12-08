import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// =============================
//         TEST ROUTE
// =============================
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* -------------------------
    APERTURA_COBRANZA
-------------------------- */

app.get("/aperturas", async (req, res) => {
  const data = await prisma.apertura_cobranza.findMany();
  res.json(data);
});

app.post("/aperturas", async (req, res) => {
  const data = await prisma.apertura_cobranza.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
         CAJERO
-------------------------- */

app.get("/cajeros", async (req, res) => {
  const data = await prisma.cajero.findMany();
  res.json(data);
});

app.post("/cajeros", async (req, res) => {
  const data = await prisma.cajero.create({
    data: req.body,
  });
  res.json(data);
});

app.put("/cajeros/:id", async (req, res) => {
  const data = await prisma.cajero.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(data);
});

app.delete("/cajeros/:id", async (req, res) => {
  await prisma.cajero.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ message: "Cajero deleted successfully" });
});

/* -------------------------
         RECIBO
-------------------------- */

app.get("/recibos", async (req, res) => {
  const data = await prisma.recibo.findMany();
  res.json(data);
});

app.post("/recibos", async (req, res) => {
  const data = await prisma.recibo.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
         CIERRE_CAJA
-------------------------- */

app.get("/cierres", async (_req, res) => {
  const data = await prisma.cierre_caja.findMany();
  res.json(data);
});

app.post("/cierres", async (req, res) => {
  const data = await prisma.cierre_caja.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
          EXTORNO
-------------------------- */

app.get("/extornos", async (_req, res) => {
  const data = await prisma.extorno.findMany();
  res.json(data);
});

app.post("/extornos", async (req, res) => {
  const data = await prisma.extorno.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
           PAGO
-------------------------- */

app.get("/pagos", async (_req, res) => {
  const data = await prisma.pago.findMany();
  res.json(data);
});

app.post("/pagos", async (req, res) => {
  const data = await prisma.pago.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
       PAGO_DETALLE
-------------------------- */

app.get("/pago-detalle", async (_req, res) => {
  const data = await prisma.pago_detalle.findMany();
  res.json(data);
});

app.post("/pago-detalle", async (req, res) => {
  const data = await prisma.pago_detalle.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
       CONCEPTO_PAGO
-------------------------- */

app.get("/conceptos_pago", async (_req, res) => {
  const data = await prisma.concepto_pago.findMany();
  res.json(data);
});

app.post("/conceptos_pago", async (req, res) => {
  const data = await prisma.concepto_pago.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
        TIPO_PAGO
-------------------------- */

app.get("/tipo_pago", async (_req, res) => {
  const data = await prisma.tipo_pago.findMany();
  res.json(data);
});

app.post("/tipo_pago", async (req, res) => {
  const data = await prisma.tipo_pago.create({
    data: req.body,
  });
  res.json(data);
});

/* -------------------------
        CONTRIBUYENTE
-------------------------- */

app.get("/contribuyentes", async (_req, res) => {
  const data = await prisma.gen_contribuyente.findMany();
  res.json(data);
});

app.post("/contribuyentes", async (req, res) => {
  const data = await prisma.gen_contribuyente.create({
    data: req.body,
  });
  res.json(data);
});

// Update contribuyente
app.put("/contribuyentes/:id", async (req, res) => {
  const data = await prisma.gen_contribuyente.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(data);
});

// Delete contribuyente
app.delete("/contribuyentes/:id", async (req, res) => {
  await prisma.gen_contribuyente.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ message: "Contribuyente deleted successfully" });
});

/* -------------------------
         SERVER
-------------------------- */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
