'use client';

import FinishInfoCard from '@/components/cards/finish-info-card';
import FinishModal from '@/components/modals/finish-modal';
import PageContent from '@/components/page-content';
import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
  Modal,
  Radio,
  RadioGroup,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';

const PaymentInfos = () => (
  <div className="flex flex-col md:flex-row gap-4">
    <Input size="sm" label="Número do cartão" />
    <Input size="sm" label="Nome no cartão" />
    <Input size="sm" label="Data de expiração" />
    <Input size="sm" label="Código de segurança" />
  </div>
);

export default function Finalizar() {
  const [payMethod, setPayMethod] = useState<string>('cartao-credito');
  const [isLoadingFinish, setIsLoadingFinish] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FinishModal isOpen={isOpen} onClose={onClose} />
      <PageContent className="flex flex-col-reverse md:flex-row gap-4 items-start">
        <div className="w-full flex-[9] flex flex-col gap-4 mt-4 md:mt-0">
          <p className="text-3xl font-semibold">Finalizar compra</p>

          <div className="flex flex-col gap-4">
            <p className="text-xl ">Endereço de entrega</p>

            <div className="flex flex-col md:flex-row gap-4">
              <Input size="sm" label="Nome completo" />
              <Input size="sm" label="Telefone" />
              <Input size="sm" label="CEP" />
              <Input size="sm" label="Endereço" />
              <Input size="sm" label="Número da residência" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
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
                <RadioGroup value={payMethod} onValueChange={setPayMethod}>
                  <div className="flex flex-col gap-2">
                    <Radio value="cartao-credito">Cartão de crédito</Radio>

                    {payMethod === 'cartao-credito' && <PaymentInfos />}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Radio value="cartao-debito">Cartão de débito</Radio>

                    {payMethod === 'cartao-debito' && <PaymentInfos />}
                  </div>

                  <Radio value="boleto">Boleto</Radio>
                  <Radio value="pix">Pix</Radio>
                </RadioGroup>
              </CardBody>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button
              isLoading={isLoadingFinish}
              variant="shadow"
              color="success"
              className=" text-white font-medium"
              onClick={() => {
                setIsLoadingFinish(true);

                setTimeout(() => {
                  onOpen();
                }, 2000);
              }}
            >
              Finalizar compra
            </Button>
          </div>
        </div>

        <FinishInfoCard />
      </PageContent>
    </>
  );
}
