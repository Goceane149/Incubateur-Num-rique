<?php

namespace App\Entity;

use App\Repository\TrajetRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

#[ORM\Entity(repositoryClass: TrajetRepository::class)]
#[ApiResource]
class Trajet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10)]
    private ?string $depart_date = null;

    #[ORM\Column(length: 5)]
    private ?string $depart_hour = null;

    #[ORM\Column(length: 255)]
    private ?string $depart = null;

    #[ORM\Column(length: 255)]
    private ?string $destination = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $etapes = null;

    #[ORM\Column]
    private ?int $places = null;

    #[ORM\Column]
    private ?int $bagages_petits = null;

    #[ORM\Column]
    private ?int $bagages_grands = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $notes = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false, name: "id_account")]
    private ?User $id_account = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false, name: "id_car")]
    private ?Car $id_car = null;

    #[ORM\OneToMany(targetEntity: UserTrajet::class, mappedBy: "id_user")]
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDepartDate(): ?string
    {
        return $this->depart_date;
    }

    public function setDepartDate(string $depart_date): self
    {
        $this->depart_date = $depart_date;

        return $this;
    }

    public function getDepartHour(): ?string
    {
        return $this->depart_hour;
    }

    public function setDepartHour(string $depart_hour): self
    {
        $this->depart_hour = $depart_hour;

        return $this;
    }

    public function getDepart(): ?string
    {
        return $this->depart;
    }

    public function setDepart(string $depart): self
    {
        $this->depart = $depart;

        return $this;
    }

    public function getDestination(): ?string
    {
        return $this->destination;
    }

    public function setDestination(string $destination): self
    {
        $this->destination = $destination;

        return $this;
    }

    public function getEtapes(): ?string
    {
        return $this->etapes;
    }

    public function setEtapes(?string $etapes): self
    {
        $this->etapes = $etapes;

        return $this;
    }

    public function getPlaces(): ?int
    {
        return $this->places;
    }

    public function setPlaces(int $places): self
    {
        $this->places = $places;

        return $this;
    }

    public function getBagagesPetits(): ?int
    {
        return $this->bagages_petits;
    }

    public function setBagagesPetits(int $bagages_petits): self
    {
        $this->bagages_petits = $bagages_petits;

        return $this;
    }

    public function getBagagesGrands(): ?int
    {
        return $this->bagages_grands;
    }

    public function setBagagesGrands(int $bagages_grands): self
    {
        $this->bagages_grands = $bagages_grands;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(?string $notes): self
    {
        $this->notes = $notes;

        return $this;
    }

    public function getIdAccount(): ?User
    {
        return $this->id_account;
    }

    public function setIdAccount(?User $id_account): self
    {
        $this->id_account = $id_account;

        return $this;
    }

    public function getIdCar(): ?Car
    {
        return $this->id_car;
    }

    public function setIdCar(?Car $id_car): self
    {
        $this->id_car = $id_car;

        return $this;
    }

     /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->users->removeElement($user);

        return $this;
    }
}
