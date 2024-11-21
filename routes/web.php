<?php
use App\Http\Controllers\RobotController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Models\Robot;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $robotCount = Robot::count();

    return Inertia::render('Dashboard', [
        'robotCount' => $robotCount
    ]);
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('robots', RobotController::class);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index']);
});


Route::get('/admin', [AdminController::class, 'index']);

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/robots', [AdminController::class, 'index'])->name('admin.robots.index');
    Route::get('/robots/create', [AdminController::class, 'create'])->name('admin.robots.create');
    Route::post('/robots', [AdminController::class, 'store'])->name('admin.robots.store');
    Route::get('/robots/{id}/edit', [AdminController::class, 'edit'])->name('admin.robots.edit');
    Route::put('/robots/{id}', [AdminController::class, 'update'])->name('admin.robots.update');
    Route::delete('/robots/{id}', [AdminController::class, 'destroy'])->name('admin.robots.destroy');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin/dashboard', 'AdminController@index');


Route::get('/ccentre', function () {
    return Inertia::render('CCentre');
})->name('ccentre');


require __DIR__.'/auth.php';
