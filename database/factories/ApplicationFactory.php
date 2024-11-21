<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake() -> sentence(),
            'description' => fake() -> realText(200),
            'author_name' => fake() -> name(),
            'published_at' => fake() -> optional() -> dateTime(),
        ];
    }
}