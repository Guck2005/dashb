/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";


const SignUpPage: FC = function () {
  return (
    <div className="flex flex-col items-center justify-center  lg:h-screen lg:gap-y-12">
      {/* <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <img
          alt="Flowbite logo"
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-12"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Flowbite
        </span>
      </div> */}
      <Card
        horizontal
        imgSrc=""
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className=" self-center mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Inscription
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Entrez votre nom</Label>
            <TextInput
              id="name"
              name="name"
              placeholder="GUCK"
              type="text"
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="phone">Entrez votre numéro de téléphone</Label>
            <TextInput
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              type="tel"
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Entrez votre adresse mail</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@gmail.com"
              type="email"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Entrez votre mot de passe</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="confirmPassword">Confirmez votre mot de passe</Label>
            <TextInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex items-center gap-x-3">
            <Checkbox id="acceptTerms" name="acceptTerms" />
            <Label htmlFor="acceptTerms">
              J'accepte les&nbsp;
              <a href="#" className="text-primary-700 dark:text-primary-200">
                Conditions d'utilisation de ExploreBenin
              </a>
            </Label>
          </div>
          <div className="mb-7 flex items-center justify-center">
            <Button type="submit" className="w-full lg:w-auto">
              S'nscrire
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
            Avez vous un compte?&nbsp;
            <Link to="/authentication/sign-in" className="text-primary-600 dark:text-primary-200">
              Se connecter
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignUpPage;
