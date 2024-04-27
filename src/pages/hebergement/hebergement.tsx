/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import {
  Breadcrumb,
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiDocumentDownload,
  HiUpload,
  HiHome,
  HiOutlineExclamationCircle,
  HiPlus,
  HiTrash,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { AiOutlineEye } from 'react-icons/ai';
import * as XLSX from 'xlsx';
const HebergementListPage: FC = function () {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Hebergement</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Liste des Hebergements
            </h1>
          </div>
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <form className="lg:pr-3">
                <Label htmlFor="users-search" className="sr-only">
                  Rechercher
                </Label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <TextInput
                    id="users-search"
                    name="users-search"
                    placeholder="Rechercher un Hebergement"
                  />
                </div>
              </form>
            </div>
            <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
              <AddHebergementModal />
              <Button color="gray" onClick={exportToExcel}>
                <div className="flex items-center gap-x-3">
                  <HiDocumentDownload className="text-xl" />
                  <span>Export</span>
                </div>
              </Button>

            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <AllHebergementTable />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </NavbarSidebarLayout>
  );
};

const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  const typesHebergement = [
  { id: 1, label: "Hotel" },
  { id: 2, label: "Auberge" },
  ];
const AddHebergementModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-xl" />
          Ajouter un Hebergement
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Ajouter un Hebergement</strong>
        </Modal.Header>
        <Modal.Body style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <Label htmlFor="firstName">Nom</Label>
                <div className="mt-1">
                  <TextInput
                    id="nom"
                    name="nom"
                    placeholder="Ulysse"
                    type="text"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="typeHebergement">Type d'Hebergement</Label>
                <Dropdown
                  id="typeHebergement"
                  label="Type d'hébergement"
                  dismissOnClick={true}
                  className="w-full"
                >
                  {typesHebergement.map((type) => (
                    <Dropdown.Item key={type.id} className="w-full">
                      <input type="radio" id={`type-${type.id}`} name="typeHebergement" />
                      <label htmlFor={`type-${type.id}`}>{type.label}</label>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-1">
                  <TextInput
                    id="email"
                    name="email"
                    placeholder="example@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <div className="mt-1">
                  <TextInput
                    id="phone"
                    name="phone"
                    placeholder="e.g., +(12)3456 789"
                    type="tel"
                  />
                </div>
              </div> 

              <div>
                <Label htmlFor="latitude">Latitude</Label>
                <div className="mt-1">
                  <TextInput
                    id="latitude"
                    name="latitude"
                    placeholder="Latitude (Nord/Sud)"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="longitude">Longitude</Label>
                <div className="mt-1">
                  <TextInput
                    id="longitude"
                    name="longitude"
                    placeholder="Longitude (Est/Ouest)"
                    type="text"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="" className="flex justify-center">Disponibilité</label>
                {joursSemaine.map((jour) => (
                  <div key={jour}>
                    <Label htmlFor={`heureOuverture_${jour}`}>{jour}</Label>
                    <div className="flex space-x-2">
                      <TextInput
                        id={`heureOuverture_${jour}`}
                        name={`heureOuverture_${jour}`}
                        placeholder="Heure d'ouverture"
                        type="time"
                        className="w-full"
                      />
                      <TextInput
                        id={`heureFermeture_${jour}`}
                        name={`heureFermeture_${jour}`}
                        placeholder="Heure de fermeture"
                        type="time"
                        className="w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>


              <div className="lg:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="e.g. Le Bénin est un pays de pagaille"
                  rows={6}
                  className="mt-1"
                />
              </div>
              <div className="lg:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <HiUpload className="text-4xl text-gray-300" />
                      <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                        Télécharger une photo
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF avec une taille de moins de 10MB
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button color="primary" onClick={() => setOpen(false)}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


const AllHebergementTable: FC = function () {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 all-users-table">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <Label htmlFor="select-all" className="sr-only">
            Select all
          </Label>
          <Checkbox id="select-all" name="select-all" />
        </Table.HeadCell>
        <Table.HeadCell>Hebergement</Table.HeadCell>
        <Table.HeadCell>Type d'Hebergement</Table.HeadCell>
        <Table.HeadCell>Ville</Table.HeadCell>
        <Table.HeadCell>Propriétaire Identifiants</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">

        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="w-4 p-4">
            <div className="flex items-center">
              <Checkbox aria-describedby="checkbox-1" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="sr-only">
                checkbox
              </label>
            </div>
          </Table.Cell>
          <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
            <img
              className="h-10 w-10 rounded-full"
              src="/images/users/neil-sims.png"
              alt="Neil Sims avatar"
            />
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                Hotel Bob Marley
              </div>
              <div className="text-sm font-normal text-gray-900 dark:text-gray-400">
                +229 68845592
              </div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                marley.sims@gmail.com
              </div>
            </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                <div className="text-base font-semibold text-gray-600 dark:text-white">
                  Hotel
                </div>
              </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                <div className="text-base font-semibold text-gray-600 dark:text-white">
                  Lokossa
                </div>
              </div>
          </Table.Cell>
          <Table.Cell >
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                98752485
              </div>
              <div className="text-sm font-normal text-gray-900 dark:text-gray-400">
                mflGH4875
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <EditPresidentModal />
              <DeletePresidentModal />
            </div>
          </Table.Cell>
        </Table.Row>

        
      </Table.Body>
    </Table>
  );
};

const EditPresidentModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-2">
          <AiOutlineEye className="text-lg" />
          Voir plus
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Informations sur la destination</strong>
        </Modal.Header>
        <Modal.Body style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <Label htmlFor="firstName">Nom</Label>
                <div className="mt-1">
                  <TextInput
                    id="nom"
                    name="nom"
                    placeholder="Ulysse"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-full">
                <Label htmlFor="typeDestination">Ville</Label>
                <Dropdown
                  id="ville"
                  label="Choisissez la ville"
                  dismissOnClick={true}
                  className="w-full"
                >
                  {typesHebergement.map((type) => (
                    <Dropdown.Item key={type.id} className="w-full">
                      <input type="radio" id={`type-${type.id}`} name="typeDestination" />
                      <label htmlFor={`type-${type.id}`}>{type.label}</label>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </div>

              <div>
                <Label htmlFor="latitude">Latitude</Label>
                <div className="mt-1">
                  <TextInput
                    id="latitude"
                    name="latitude"
                    placeholder="Latitude (Nord/Sud)"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="longitude">Longitude</Label>
                <div className="mt-1">
                  <TextInput
                    id="longitude"
                    name="longitude"
                    placeholder="Longitude (Est/Ouest)"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-full">
                <Label htmlFor="typeDestination">Type de destination</Label>
                <Dropdown
                  id="typeDestination"
                  label="Choisissez le type de destination"
                  dismissOnClick={true}
                  className="w-full"
                >
                  {typesHebergement.map((type) => (
                    <Dropdown.Item key={type.id} className="w-full">
                      <input type="radio" id={`type-${type.id}`} name="typeDestination" />
                      <label htmlFor={`type-${type.id}`}>{type.label}</label>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </div>
              <div className="lg:col-span-2">
                <p className="text-gray-800">Horaire de visite (ouverture/fermeture)</p>
                {joursSemaine.map((jour) => (
                  <div key={jour}>
                    <Label htmlFor={`heureOuverture_${jour}`}>{jour}</Label>
                    <div className="flex space-x-2">
                      <TextInput
                        id={`heureOuverture_${jour}`}
                        name={`heureOuverture_${jour}`}
                        placeholder="Heure d'ouverture"
                        type="time"
                        className="w-full"
                      />
                      <TextInput
                        id={`heureFermeture_${jour}`}
                        name={`heureFermeture_${jour}`}
                        placeholder="Heure de fermeture"
                        type="time"
                        className="w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>


              <div className="lg:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="e.g. Le Bénin est un pays de pagaille"
                  rows={6}
                  className="mt-1"
                />
              </div>
              <div className="lg:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <HiUpload className="text-4xl text-gray-300" />
                      <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                        Télécharger une photo
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF avec une taille de moins de 10MB
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
            <Button color="primary" onClick={() => setOpen(false)}>
              Enregistrer
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


const DeletePresidentModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="failure" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-2">
          <HiTrash className="text-lg" />
          Supprimer
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
        <Modal.Header className="px-6 pt-6 pb-0">
          <span className="sr-only">Delete user</span>
        </Modal.Header>
        <Modal.Body className="px-6 pt-0 pb-6">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <HiOutlineExclamationCircle className="text-7xl text-red-500" />
            <p className="text-xl text-gray-500">
              Êtes vous sûr de vouloir supprimer ce guide?
            </p>
            <div className="flex items-center gap-x-3">
              <Button color="failure" onClick={() => setOpen(false)}>
                Oui
              </Button>
              <Button color="gray" onClick={() => setOpen(false)}>
                Non
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const exportToExcel = () => {
  // Créer une nouvelle feuille de calcul
  const wb = XLSX.utils.book_new();

  // Sélectionner la table des guides
  const table = document.querySelector('.all-users-table'); // Utilisez la classe ou l'ID de votre table ici
  const tableData = XLSX.utils.table_to_sheet(table);

  // Ajouter la feuille de calcul au classeur
  XLSX.utils.book_append_sheet(wb, tableData, 'Guides');

  // Télécharger le fichier Excel
  XLSX.writeFile(wb, 'destination.xlsx');
};



export const Pagination: FC = function () {
  return (
    <div className="sticky right-0 bottom-0 w-full items-center border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between">
      <div className="mb-4 flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous page</span>
          <HiChevronLeft className="text-2xl" />
        </a>
        <a
          href="#"
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next page</span>
          <HiChevronRight className="text-2xl" />
        </a>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            1-20
          </span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            2290
          </span>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="#"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <HiChevronLeft className="mr-1 text-base" />
          Précédent
        </a>
        <a
          href="#"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Suivant
          <HiChevronRight className="ml-1 text-base" />
        </a>
      </div>
    </div>
  );
};

export default HebergementListPage;
