import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <aside>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-auto sticky-top">
                        <div className="d-flex flex-sm-column flex-row flex-nowrap  align-items-center sticky-top">
                            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                                <li className="nav-item">
                                    <Link to="/dashboard">
                                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                            <i className="bi-house fs-1"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">
                                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                            <i className="bi-speedometer2 fs-1"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/virtual-assistant">
                                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                            <i className="bi-table fs-1"></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="dropdown">
                                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-person-circle h2"></i>
                                </a>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </aside>
    )
}
