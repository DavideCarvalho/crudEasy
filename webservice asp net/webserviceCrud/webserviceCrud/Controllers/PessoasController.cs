using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webserviceCrud.Models;
using System.Web.Http.Cors;
using MySql.Data.MySqlClient;
using System.Data;

namespace webserviceCrud.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PessoasController : ApiController
    {
        private List<Product> products = new List<Product>();

        public IEnumerable<Product> Get()
        {
            string connectionString = "Server=localhost;Database=teste;Uid=root;Pwd=;";
            string query = "Select * from produtos";
            MySqlConnection connect = new MySqlConnection(connectionString);
            MySqlCommand cmd = new MySqlCommand(query, connect);
            connect.Open();
            IDataReader leitor = cmd.ExecuteReader();

            while (leitor.Read())
            {
                int pegarId = Convert.ToInt32(leitor["ID_PRODUTO"]);
                string pegarnome = Convert.ToString(leitor["NOME"]);
                //decimal pegarpreco = Convert.ToDecimal(10,2)(leitor["PRECO"]);
                double pegarpreco = Convert.ToDouble(leitor["PRECO"]);
                products.Add(new Product { Id=pegarId, Name=pegarnome, Price=pegarpreco });
            }

            connect.Close();

            return products;
        }

        [HttpPost]
        public string Post([FromBody]dynamic value)
        {
            string connectionString = "Server=localhost;Database=teste;Uid=root;Pwd=;";
            string query = "INSERT INTO produtos(NOME,PRECO) VALUES ('" + value.nome + "','" + value.preco + "')";
            MySqlConnection connect = new MySqlConnection(connectionString);
            connect.Open();
            MySqlCommand cmd = new MySqlCommand(query, connect);
            cmd.CommandText = query;
            cmd.ExecuteNonQuery();
            connect.Close();
            return "sucesso";
        }

        [HttpDelete]
        public string Delete([FromUri]dynamic id)
        {
            string connectionString = "Server=localhost;Database=teste;Uid=root;Pwd=;";
            string query = "DELETE FROM produtos WHERE ID_PRODUTO='" + id + "'";
            MySqlConnection connect = new MySqlConnection(connectionString);
            connect.Open();
            MySqlCommand cmd = new MySqlCommand(query, connect);
            cmd.CommandText = query;
            cmd.ExecuteNonQuery();
            connect.Close();
            return "sucesso";
        }

        [HttpPut]
        public double Put([FromBody]dynamic value)
        {
            string connectionString = "Server=localhost;Database=teste;Uid=root;Pwd=;";
            string query = "update produtos SET NOME = '" + value.Name + "', PRECO = '" + value.Price + "' WHERE ID_PRODUTO = '" + value.Id + "'";
            MySqlConnection connect = new MySqlConnection(connectionString);
            connect.Open();
            MySqlCommand cmd = new MySqlCommand(query, connect);
            cmd.CommandText = query;
            cmd.ExecuteNonQuery();
            connect.Close();
            return value.Price;
        }
    }
}
