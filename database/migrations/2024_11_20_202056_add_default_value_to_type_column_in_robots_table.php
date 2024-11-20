<?php

// database/migrations/xxxx_xx_xx_xxxxxx_add_default_value_to_type_column_in_robots_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDefaultValueToTypeColumnInRobotsTable extends Migration
{
    public function up()
    {
        Schema::table('robots', function (Blueprint $table) {
            // Set a default value for the 'type' column
            $table->string('type')->default('default')->change();
        });
    }

    public function down()
    {
        Schema::table('robots', function (Blueprint $table) {
            // Remove the default value
            $table->string('type')->default(null)->change();
        });
    }
}

