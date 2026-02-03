<?php

namespace App\Twig\Components;

use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PostMount;

#[AsTwigComponent]
final class Alert
{
    public string $message;

    public string $type = 'success';

    public bool $withCloseButton;

    public function disable()
    {
        $this->message = "";
    }

    #[PostMount]
    public function postMount(): void
    {
        // $this->message = "";
    }
}
