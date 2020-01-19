<?php

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
        \DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@qq.com',
            'password' => bcrypt('123456'),
            'status' => 1,
            'is_admin' => 1
        ]);
    }
}