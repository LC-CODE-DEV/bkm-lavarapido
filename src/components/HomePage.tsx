"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Droplets,
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Phone,
  Star,
  CheckCircle,
  Menu,
  X,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);
  const openPriceModal = () => setShowPriceModal(true);
  const closePriceModal = () => setShowPriceModal(false);

  // BLOQUEIO de scroll quando menu abre
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (menuOpen) {
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
      html.style.overscrollBehavior = "none";
      html.style.touchAction = "none";
    } else {
      const y = -parseInt(body.style.top || "0", 10) || 0;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      html.style.overscrollBehavior = "";
      html.style.touchAction = "";
      if (y) window.scrollTo(0, y);
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      html.style.overscrollBehavior = "";
      html.style.touchAction = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-0 pb-16">
        <div className="container mx-auto px-4">
          {/* TOPBAR (desktop: logo esq / nav centro | mobile: menu esq / logo dir) */}
          <div className="relative h-16">
            {/* MOBILE: menu à ESQUERDA, logo à DIREITA */}
            <div className="flex md:hidden items-center justify-between h-16">
              {/* Botão menu (esquerda) */}
              {!menuOpen ? (
                <button
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Abrir menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              ) : (
                <button
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </button>
              )}

              {/* Logo (direita) */}
              <div className="flex items-center gap-2">
                <Image
                  src="/imagens/bkm-logo.png"
                  alt="Logo BKM"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-2xl font-bold text-blue-600 leading-none">
                    BKM
                  </span>
                  <span className="text-xs text-gray-600 whitespace-nowrap leading-none">
                    Lava Rápido
                  </span>
                </div>
              </div>
            </div>

            {/* DESKTOP: logo à ESQUERDA, nav CENTRALIZADO */}
            <div className="hidden md:block">
              {/* Logo esquerda */}
              <div className="absolute inset-y-0 left-0 flex items-center gap-2">
                <Image
                  src="/imagens/bkm-logo.png"
                  alt="Logo BKM"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-2xl font-bold text-blue-600 leading-none">
                    BKM
                  </span>
                  <span className="text-xs text-gray-600 whitespace-nowrap leading-none">
                    Lava Rápido
                  </span>
                </div>
              </div>

              {/* Nav central (em negrito) */}
              <nav className="hidden md:flex items-center gap-8 h-16 absolute left-1/2 -translate-x-1/2 font-bold">
                <Link
                  href="#servicos"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Serviços
                </Link>
                <Link
                  href="#sobre"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  href="#contato"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contato
                </Link>
              </nav>
            </div>
          </div>

          {/* Dropdown mobile logo abaixo da topbar */}
          {menuOpen && (
            <div className="w-full bg-white shadow-lg border rounded-xl mt-4 md:hidden">
              <div className="flex flex-col items-center space-y-4 py-6">
                <Link
                  href="#servicos"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Serviços
                </Link>
                <Link
                  href="#sobre"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Sobre
                </Link>
                <Link
                  href="#contato"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Contato
                </Link>
              </div>
            </div>
          )}

          {/* Conteúdo da HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            {/* Coluna esquerda */}
            <div>
              <Badge className="mb-5 bg-blue-100 text-blue-800 hover:bg-blue-100 inline-flex items-center px-2 py-1 rounded-md">
                <Sparkles className="h-3 w-3 mr-2" />
                Qualidade Premium
              </Badge>

              <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Seu carro <span className="text-blue-600">brilhando</span>
                <br />
                em minutos
              </h1>

              <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                No BKM Lava Rápido, cuidamos do seu veículo com a qualidade e
                agilidade que você merece. Serviços profissionais com produtos
                de primeira linha.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511968369512?text=Ol%C3%A1%2C%20quero%20agendar%20um%20servi%C3%A7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  >
                    <Car className="h-5 w-5 mr-2" />
                    Agendar Serviços
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                  onClick={openPriceModal}
                >
                  Ver Preços
                </Button>
              </div>
            </div>

            {/* Coluna direita */}
            <div className="relative">
              <Image
                src="/imagens/bkm-1imagem.png"
                alt="Carro limpo e brilhante"
                width={350}
                height={10}
                className="rounded-2xl shadow-2xl w-full max-w-[350px] mx-auto md:ml-[20%]"
                style={{ position: "relative" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Serviço Rápido</p>
                    <p className="text-sm text-gray-600">45-60 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal da Tabela de Preços */}
      {showPriceModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-11/12 p-4">
            <button
              onClick={closePriceModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              aria-label="Fechar modal"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src="/imagens/tabela-preco.png"
              alt="Tabela de Preços BKM Lava Rápido"
              width={500}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      )}

      {/* Serviços */}
      <section id="servicos" className="py-11 bg-white"> {/* antes era py-20 */}
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12"> {/* antes era mb-16 */}
            <Badge className="mb-2 bg-blue-100 text-blue-800 font-bold hover:bg-blue-100">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 py-4">
              Cuidado completo para seu veículo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para manter seu carro
              sempre impecável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Lavagem Simples</CardTitle>
                <CardDescription>
                  Lavagem externa completa com produtos de qualidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lavagem externa
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Secagem
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pneus e rodas
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Lavagem Completa</CardTitle>
                <CardDescription>
                  Lavagem externa e interna com aspiração
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lavagem externa e interna
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Aspiração completa
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Aplicação de silicone e cheirinho
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={faMotorcycle}
                    className="h-6 w-6 text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl">Lavagem de Moto</CardTitle>
                <CardDescription>
                  Proteção e brilho duradouro para sua pintura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lavagem completa
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Enceramento premium
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proteção UV
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 mx-auto lg:mx-0">
                Sobre o BKM
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher o BKM?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Com 2 anos de experiência no mercado, o BKM Lava Rápido se destaca
                pela qualidade dos serviços e atendimento personalizado.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-left">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Rapidez</h3>
                    <p className="text-gray-600">Serviços executados em até 60 minutos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-left">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Qualidade</h3>
                    <p className="text-gray-600">Produtos premium e equipamentos modernos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-left">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Satisfação</h3>
                    <p className="text-gray-600">Mais de 1000 clientes satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/imagens/bkm-2.png"
                alt="Equipe BKM"
                width={350}
                height={10}
                className="rounded-2xl shadow-2xl w-full max-w-[350px] mx-auto md:ml-[20%]"
                style={{ position: "relative" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-9 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Entre em Contato
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 py-2">
              Visite nossa unidade
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos localizados em ponto estratégico para melhor atendê-lo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rua Romão José da Silva, 11a
                  <br />
                  Pq. Boturussu - São Paulo/SP
                  <br />
                  CEP: 03802-030
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  (11) 96836-9512
                  <br />
                  (11) 98454-0927
                </p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Contate-nos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Terça a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 17h
                  <br />
                  Domingo: 9h às 15h
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BKM</h3>
                  <p className="text-sm text-gray-400">Lava Rápido</p>
                </div>
              </div>
              <p className="text-gray-400">
                Cuidando do seu veículo com qualidade e agilidade desde 2024.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lavagem Simples</li>
                <li>Lavagem Completa</li>
                <li>Lavagem de Moto</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (11) 96836-9512
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Romão+José+da+Silva,+11a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Rua Romão José da Silva, 11A
                  </a>
                </li>
                <li>Ao Lado da Academia Mansão Maromba</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Horários</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ter-Sex: 8h às 18h</li>
                <li>Sábado: 8h às 17h</li>
                <li>Domingo: 9h às 15h</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <h4 className="font-semibold mb-4">Siga-nos nas Redes Sociais</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/lavarapidobkm?igsh=NXdmdDhpNGx6c3Fp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F] p-2 rounded-full hover:bg-[#C13584] transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/5511968369512"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BKM Lava Rápido. Todos os direitos reservados.</p>
            <p className="mt-4 text-sm flex items-center justify-center">
              Desenvolvido por
              <a
                href="https://wa.me/5511991825303?text=Ol%C3%A1%2C%20vim%20pelo%20site%20BKM%20Lava%20R%C3%A1pido"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center ml-2 hover:underline"
              >
                <span className="font-semibold text-blue-400">LcCode</span>
                <img
                  src="/imagens/Lc_Code.png"
                  alt="LcCode Logo"
                  className="h-14 ml-2"
                />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
