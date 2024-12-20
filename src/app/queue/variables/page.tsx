// Queue Variables Page Requirements
import { Form, Input, Page } from "@/components";
import { Metadata } from "next";
// Queue Page Constants
const TITLE = "Variables";
const DESCRIPTION =
  "Aquí se agregan los valores a las variables para el resultado final";
// Queue Variables Metadata
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};
// Queue Variables Page Props
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
// Queue Variables Page Main Function
function QueueVariablesPage({ searchParams }: Props) {
  // Get Model from Param
  const MODEL =
    typeof searchParams["model"] === "string"
      ? searchParams["model"]
      : "mm1-fifo-inf-inf";
  // Returns Queue Variables Page
  return (
    <Page title={TITLE} description={DESCRIPTION}>
      <section>
        {/* Set Values */}
        <h2>Establecer Valores</h2>
        {/* Variables Form */}
        <Form
          api="queue/result"
          method="GET"
          button="Calcular"
          modal={{
            success: "Se han Calculado las Nuevas Variables",
            error: "No se han podido calcular las Nuevas Variables",
            loading: "Obteniendo Variables",
          }}
        >
          <div>
            {/* Invisible Input that has Model Code and it is Read Only */}
            <input
              className="invisible"
              type="text"
              name="model"
              value={MODEL}
              readOnly
            />
            {/* Arrival Distribution Rate Input */}
            <Input
              label="Tasa de Distribución de Llegada (λ)"
              type="text"
              name="l"
              example="90"
              help="Números Positivos Solamente"
              validation="number"
            />
            {/* Average Service Rate Input */}
            <Input
              label="Tasa media de Servicio (µ)"
              type="text"
              name="m"
              example="120"
              help="Números Positivos Solamente"
              validation="number"
            />
            {/* Number of Customers to Obtain Probability of n customers in the system Input */}
            <Input
              label="Número de Clientes para Obtener Probabilidad de n clientes en el sistema (n1)"
              type="text"
              name="n1"
              example="0"
              help="Números Positivos Solamente"
              validation="numberWithZero"
            />
            {MODEL.includes("k") && (
              <>
                {/* Queue Size Input */}
                <Input
                  label="Tamaño de la Cola (k)"
                  type="text"
                  name="k"
                  example="14"
                  help="Números Positivos Solamente"
                  validation="number"
                />
              </>
            )}
            {!MODEL.includes("k") && (
              <>
                {/* Number of Customers to Obtain Probability of a Queue of more than n Customers Input */}
                <Input
                  label="Número de Clientes para Obtener Probabilidad de una Cola de más de n Clientes (n2)"
                  type="text"
                  name="n2"
                  example="4"
                  help="Números Positivos Solamente"
                  validation="numberWithZero"
                />
                {/* Time units to Obtain Probability that it is more than t time units in System Input */}
                <Input
                  label="Unidades de tiempo para Obtener Probabilidad de que este más de t unidades de tiempo en Sistema (t1)"
                  type="text"
                  name="t1"
                  example="10"
                  help="Números Positivos Solamente"
                  validation="numberWithZero"
                />
                {/* Time units to Obtain Probability that it is more than t time units in Queue Input */}
                <Input
                  label="Unidades de tiempo para Obtener Probabilidad de que este más de t unidades de tiempo en Cola (t2)"
                  type="text"
                  name="t2"
                  example="20"
                  help="Números Positivos Solamente"
                  validation="numberWithZero"
                />
              </>
            )}
            {/* If it is the M/M/S model, display servers amount input */}
            {MODEL.startsWith("mms") && (
              // Servers Amount Input
              <Input
                label="Cantidad de Servidores (s)"
                type="text"
                name="s"
                example="2"
                help="Números Positivos Solamente"
                validation="servers"
              />
            )}
          </div>
        </Form>
      </section>
    </Page>
  );
}

export default QueueVariablesPage;
