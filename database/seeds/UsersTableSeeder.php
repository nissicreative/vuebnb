<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Jane Doe',
            'email' => 'test@gmail.com',
            'password' => bcrypt('test'),
            'saved' => [1, 5, 7, 9],
        ]);
    }
}
