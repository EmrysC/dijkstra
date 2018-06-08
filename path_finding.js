//algo dijkstra sur un graph non orienté


var graph = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];//creation des points
var graph_vec = new Array();//creation des vecteurs Point1,Point2,coup

graph_vec.push([0,1,7]);
graph_vec.push([1,2,7]);
graph_vec.push([1,12,7]);
graph_vec.push([2,3,7]);
graph_vec.push([3,4,7]);
graph_vec.push([3,11,1]);
graph_vec.push([4,5,1]);
graph_vec.push([4,10,1]);
graph_vec.push([5,6,1]);
graph_vec.push([5,7,1]);
graph_vec.push([7,8,1]);
graph_vec.push([7,9,1]);
graph_vec.push([9,10,1]);
graph_vec.push([9,19,1]);
graph_vec.push([10,11,1]);
graph_vec.push([10,18,1]);
graph_vec.push([11,12,1]);
graph_vec.push([11,16,1]);
graph_vec.push([12,13,1]);
graph_vec.push([13,14,1]);
graph_vec.push([13,15,1]);
graph_vec.push([15,16,1]);
graph_vec.push([16,17,1]);
graph_vec.push([16,18,1]);
graph_vec.push([17,18,1]);
graph_vec.push([18,19,1]);

function get_chemin_posible(graph,graph_vec){
    
    var g = [];
     graph.forEach(function(element,index) {
         g[index] = [];
     });
    
    graph.forEach(function(element,index) {
        graph.forEach(function(element1) {
            var k = null;//valeur initiale du coup entre element1 et element
            if(element1 != element){
                k = -1;
                graph_vec.forEach(function(element2){//normalement pas besoin de for mais ba lec
                    if( (element2[0] == element && element2[1] == element1) || (element2[0] ==  element1 && element2[1] == element) ){
                        k = element2[2];
                    }
                }); 
            }
            g[index].push(k);
        
        });
    });
    
    return g;
    
}//returne touts les point auquel il peut aller et les coups, -1 si impossible

function algo_dijkstra(point1,matrice_graph,graph){
  
var tab = [];
    
var a;
var i;
    
var a_verifier = point1;
    
var element_verifier = [];
    
i = 100;

    
graph.forEach(function(element) {
    if(element == point1){
        tab.push(['point_dep',0]);
    }else{
        tab.push(['infinit',1000]);
    }
});   //initialisation
    
    

while(a_verifier != null){
    
    matrice_graph[a_verifier].forEach(function(element,index) {
        if(element != -1 && element != null){
                if(tab[index][1] > element+tab[a_verifier][1]){
                    tab[index] = [a_verifier,element+tab[a_verifier][1]];
                }
        }
}); //ajout des nouveau points
    
    element_verifier.push(a_verifier);
    
    a_verifier = null;
    
    a = 1000;//valeur max du coup
    
    tab.forEach(function(element,index){
        if(element[1] < a){
            c = true;
            i = 0;
            while(i < element_verifier.length){
            if(element_verifier[i] == index){
                    break;
            }
            i++;
            }
            
            if(element_verifier[i] != index){
                a = element[1];
                a_verifier = index;
            }
            
        }
    });//recherche du prochain element
}
    
    return tab;
    
}//returne un vecteur de points

function get_all_dijkstra(matrice_graph,graph){
    
    var tab = [];
    
    graph.forEach(function(element) {
        tab.push(algo_dijkstra(element,matrice_graph,graph));
    });

    return tab;
}



var matrice_graph = get_chemin_posible(graph,graph_vec);
console.log(get_chemin_posible(graph,graph_vec));


console.log(get_all_dijkstra(matrice_graph,graph));


