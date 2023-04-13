<?php

namespace App\Controller;

use App\Entity\UserTrajet;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class GetUserByMailController extends AbstractController
{
    #[Route('/get/user_by_email/{name}/{domain}/{ext}', name: 'app_get_user_by_mail')]
    public function getUserByMail(string $name, $domain, $ext, UserRepository $UserRepo) : Response
    {   
        $email = $name . "@" . $domain . "." . $ext;
    
        return $this->json($UserRepo->findBy(array('email' => $email)));
    }

    #[Route('/get/comments/{id}', name: 'app_get_comments_by_id')]
    public function getCommentsById(int $id, CommentRepository $CommentRepo, EntityManagerInterface $entityManager) : Response
    {   
        return $this->json($CommentRepo->getCommentsByTrajetId($id, $entityManager));
    }

    #[Route('/post/reservation', name: 'app_post_reservation', methods: ['POST'])]
    public function insertReservation(Request $request, SerializerInterface $serializer, EntityManagerInterface $em) : JsonResponse
    {   
        $content = $request->getContent();
        $jsonParse = json_decode($content, true);
        var_dump($jsonParse);
        try{
            $reservation = new UserTrajet();
            $reservation->setTrajetId($jsonParse["id_trajet"]);
            $reservation->setUserId($jsonParse["id_user"]);
            $reservation->setIsValidate($jsonParse["is_validate"]);

            $em->persist($reservation);
            $em->flush();

            return $this->json($reservation, 201, []);
        }catch(NotEncodableValueException $e){
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
