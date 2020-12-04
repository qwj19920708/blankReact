// import React from 'react'
// import { Router, Route, Switch, Redirect } from 'react-router-dom'
// import { createHashHistory } from 'history'

// interface routerConfig {

// }

// type IProps = Array<string>

// export default class CreateRouter extends React.Component<IProps> {
//     history:any
//     constructor(props:IProps){
//         super(props)
//         this.history = createHashHistory()
//     }

//     render(){
//         return (
//             <div></div>
//         )
//     }
// }


// let routes = [
//     {
//       path: '/Index',
//       component: Index,
//       exact:true
//     },
//     {
//       path: '/Home',
//       component:Home,
//       children:[
//         {
//           path:'/Home/ShoppingCart',
//           component:ShoppingCart,
//           exact:true
//         },
//         {
//           path:'/Home/Classify',
//           component:Classify,
//           exact:false
//         },
//       ]
//     },
//     {
//       path: '/Login',
//       component: Login,
//       exact:false
//     },
//   ]


// ReactDOM.render(
//     <HashRouter>
//         <App> // 这里使用 <Route path={'/'} exact component={App} /> 会报警告 
//         <Switch> // 利用map遍历每一项，这里因为是组件，key要注意
//             { // 利用render 渲染子路由
//                 routes.map((route,index) => (
//                 <Route
//                   key={index}
//                   path={route.path}
//                   exact={route.exact} 
//                   render={(props) => { // 利用render 方法处理
//                     if (route.children){
//                       return (
//                         <div>
//                           <route.component props={props}></route.component>
//                           <Switch>
//                             {
//                               route.children.map((child,i) => (
//                                   <Route
//                                       key={i}
//                                       path={child.path}
//                                       exact={child.exact}
//                                       component={child.component}
//                                     />
//                               ))
//                             }
//                             <Redirect to={route.children[0].path}></Redirect> // 子路由找不到，重定向到第一个子路由
//                           </Switch>
//                         </div>
//                       )
//                     }else {
//                       return (
//                         <route.component props={props}></route.component>
//                       )
//                     }
//                   }}
//              />
//           ))
//           }
//             <Redirect from='/' to='/Index'></Redirect> // 根路径重定向到 /Index
//         </Switch>
//       </App>
//     </HashRouter>,
//     document.getElementById('root')
//   );