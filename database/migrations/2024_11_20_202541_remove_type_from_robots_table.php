<?php

// database/migrations/xxxx_xx_xx_xxxxxx_remove_type_from_robots_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveTypeFromRobotsTable extends Migration
{
    public function up()
    {
        Schema::table('robots', function (Blueprint $table) {
            // Drop the 'type' column from the 'robots' table
            $table->dropColumn('type');
        });
    }

    public function down()
    {
        // In case we need to rollback the migration, add 'type' column back
        Schema::table('robots', function (Blueprint $table) {
            $table->string('type')->nullable();
        });
    }
}
