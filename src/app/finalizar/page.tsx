import PageContent from '@/components/page-content';
import {
  Card,
  CardBody,
  Divider,
  Input,
  Radio,
  RadioGroup,
} from '@nextui-org/react';

export default function Finalizar() {
  return (
    <PageContent className="flex flex-col gap-4">
      <p className="text-3xl font-semibold">Finalizar compra</p>

      <div className="flex flex-col gap-4">
        <p className="text-xl ">Endereço de entrega</p>

        <div className="flex gap-4">
          <Input size="sm" label="Nome completo" />
          <Input size="sm" label="Telefone" />
          <Input size="sm" label="CEP" />
          <Input size="sm" label="Endereço" />
          <Input size="sm" label="Número da residência" />
        </div>

        <div className="flex gap-4">
          <Input size="sm" label="Complemento" />
          <Input size="sm" label="Bairro" />
          <Input size="sm" label="Cidade" />
          <Input size="sm" label="Estado" />
        </div>
      </div>

      <Divider className="my-2" />

      <div className="flex flex-col gap-4">
        <p className="text-xl ">Forma de pagamento</p>

        <Card>
          <CardBody>
            <RadioGroup >
              <Card>
                <CardBody>
                  <Radio value="cartao-credito">Cartão de Crédito</Radio>
                </CardBody>
              </Card>
              <Radio value="cartao-debito">Cartão de Débito</Radio>
              <Radio value="boleto">Boleto</Radio>
              <Radio value="pix">Pix</Radio>
            </RadioGroup>
          </CardBody>
        </Card>
      </div>
    </PageContent>
  );
}
