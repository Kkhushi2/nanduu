export default function Product(){
    return(
    
    <div class="md:px-32 py-8 w-full">
      <div class="shadow  rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-sky-900 text-white">
            <tr>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"></th>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"></th>
              <th class="text-center py-3 px-4 uppercase font-semibold text-sm " colSpan={10} >DMF Status</th>
              
            </tr>
            <tr>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Sl no.</th>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Oncology/Non-Oncology API</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Tech Pack</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Open Part	</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">USDMF	</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">EDMF		</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Health Canada	</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">PMDA	</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">EDQM	</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">KFDA	</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">DMF Number	</th>
             
            </tr>
            
          </thead>
        <tbody class="text-gray-700">
          <tr>
            <td class="w-1/3 text-left py-3 px-4">1</td>
            <td class="w-1/3 text-left py-3 px-4">Smith</td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="w-1/3 text-left py-3 px-4">2</td>
            <td class="w-1/3 text-left py-3 px-4">Johnson</td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
          </tr>
          <tr>
            <td class="w-1/3 text-left py-3 px-4">Oliver</td>
            <td class="w-1/3 text-left py-3 px-4">Williams</td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="w-1/3 text-left py-3 px-4">Isabella</td>
            <td class="w-1/3 text-left py-3 px-4">Brown</td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
      
    )
    }