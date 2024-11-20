<?php

// database/migrations/xxxx_xx_xx_xxxxxx_make_type_nullable_in_robots_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MakeTypeNullableInRobotsTable extends Migration
{
    public function up()
    {
        Schema::table('robots', function (Blueprint $table) {
            // Make 'type' column nullable
            $table->string('type')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('robots', function (Blueprint $table) {
            // Revert 'type' column to non-nullable
            $table->string('type')->nullable(false)->change();
        });
    }
}
