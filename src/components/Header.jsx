import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TOONIVERSE</a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <a class="nav-link active" href="#"><i class="fas fa-home"></i> Home
                        <span class="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-star"></i> Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-dollar-sign"></i> Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><i class= "fas fa-info"></i> About</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Search"/>
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header;