/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";

const SignInPage: FC = function () {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-0 flex items-center gap-x-1 lg:my-0">
        {/* <img
          alt="Flowbite logo"
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-12"
        /> */}
        {/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          ExploreBenin
        </span> */}
      </div>
      <Card
        horizontal
        imgSrc=""
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="self-center mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Connexion
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Entrez votre mail</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="nom@gmail.com"
              type="email"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Entrez votre mot de passe </Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Se souvenir de moi</Label>
            </div>
            <a
              href="#"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              Mot de Passe Oublié?
            </a>
          </div>
          <div className="mb-6 flex items-center justify-center">
            <Button type="submit" className="w-full lg:w-auto">
              Se connecter
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center" >
            Vous n'avez pas un compte &nbsp;
            <Link to="/authentication/sign-up" className="text-primary-600 dark:text-primary-200">
              S'inscrire
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
