import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Case from "./Case";

function CaseList() {
    useEffect(() => {
        axios.get('http://localhost:3004/')
    }, []);
}