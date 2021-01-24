
// Put this file online somewhere and import it as a plugin

define(function () {
    return {
        meta: true,
        plugins:
{
    "solver": {
        "url": "/plugins/solver.js",
        "settings": {
            "url": "http://solver.planning.domains"
        }
    },
    "drag-and-drop": {
        "url": "/plugins/featured/drag-and-drop/plugin.js",
        "settings": {}
    },
    "save-tabs": {
        "url": "/plugins/featured/save-tabs/plugin.js",
        "settings": {
            "dominioGripper.pddl": "(define (domain pinza-strips)\r\n(:predicates (cuarto ?r)\r\n(pelota ?b)\r\n(pinza ?g)\r\n(en-robby ?r)\r\n(en ?b ?r)\r\n(libre ?g)\r\n(llevar ?o ?g))\r\n(:action mover\r\n:parameters (?de ?a)\r\n:precondition (and (cuarto ?de) (cuarto ?a) (en-robby ?de))\r\n:effect (and (en-robby ?a)\r\n(not (en-robby ?de))))\r\n\r\n(:action tomar\r\n:parameters (?obj ?cuarto ?pinza)\r\n:precondition (and (pelota ?obj) (cuarto ?cuarto) (pinza ?pinza)\r\n(en ?obj ?cuarto) (en-robby ?cuarto) (libre ?pinza))\r\n:effect (and (llevar ?obj ?pinza)\r\n(not (en ?obj ?cuarto))\r\n(not (libre ?pinza))))\r\n\r\n(:action soltar\r\n:parameters (?obj ?cuarto ?pinza)\r\n:precondition (and (pelota ?obj) (cuarto ?cuarto) (pinza ?pinza)\r\n(llevar ?obj ?pinza) (en-robby ?cuarto))\r\n:effect (and (en ?obj ?cuarto)\r\n(libre ?pinza)\r\n(not (llevar ?obj ?pinza)))))",
            "problemaGripper.pddl": "(   define (problem pinza-problema)\r\n     (:domain pinza-strips)\r\n     (:objects cuartoa cuartob pelota3 pelota2 pelota1 izquierda derecha)\r\n     (:init (cuarto cuartoa)\r\n     (cuarto cuartob)\r\n     (pelota pelota3)\r\n     (pelota pelota2)\r\n     (pelota pelota1)\r\n     (en-robby cuartoa)\r\n     (libre izquierda)\r\n     (libre derecha)\r\n     (en pelota3 cuartoa)\r\n     (en pelota2 cuartoa)\r\n     (en pelota1 cuartoa)\r\n     (pinza izquierda)\r\n     (pinza derecha))\r\n     (:goal (and \r\n                (en pelota3 cuartob)\r\n                (en pelota2 cuartob)\r\n                (en pelota1 cuartob)\r\n            )\r\n    )\r\n)\r\n"
        }
    }
}
    }
});
