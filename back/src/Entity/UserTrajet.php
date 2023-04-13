<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use App\Repository\UserTrajetRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserTrajetRepository::class)]
#[ApiResource]
class UserTrajet
{  
    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: "trajets")]
    #[ORM\JoinColumn(nullable: false, name: "id_trajet", referencedColumnName: "id")]
    private ?Trajet $id_trajet = null;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: "users")]
    #[ORM\JoinColumn(nullable: false, name: "id_user", referencedColumnName: "id")]
    private ?User $id_user = null;


    #[ORM\Column]
    private ?bool $is_validate = null;

    public function getId(): ?int
    {
        return $this->id_trajet;
    }
    
    public function getUserId(): ?int
    {
        return $this->id_user;
    }

    public function setUserId(?int $id_user): self
    {
        $this->id_user = $id_user;

        return $this;
    }

    public function getTrajetId(): ?int
    {
        return $this->id_trajet;
    }

    public function setTrajetId(?int $id_trajet): self
    {
        $this->id_trajet = $id_trajet;

        return $this;
    }


    public function isIsValidate(): ?bool
    {
        return $this->is_validate;
    }

    public function setIsValidate(bool $is_validate): self
    {
        $this->is_validate = $is_validate;

        return $this;
    }
}
