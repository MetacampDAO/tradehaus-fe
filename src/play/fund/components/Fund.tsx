import React, { useEffect, useState } from 'react';
import { FundBalances, FundValues } from '..';

interface FundProps{
  fundBalances: FundBalances | undefined;
  fundValues: FundValues | undefined;
}

const Fund = ({fundBalances, fundValues}: FundProps) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Asset</th>
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Balance</th>
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  USD Value</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAOVBMVEVHcEx47Bdu4Ahs4Ahs3wds3wds3wds3gds3gds3gdw4wh84iL///+i6mKQ5kS68IvU9bb2/fDk+dHhfN8nAAAAC3RSTlMACjlLhavA1u3/HBWfViwAAAO1SURBVHgBvNKHYQQwCANAY6q8/8AZIF+x+BuAqtUiW80jMguozAg33bJ+QtSi8FCFqYw3xxuDQ2wrfKRsL7pjiS+kHe7yjq/55rUPtARnBA20hd7/3nHFL7NghUtlN89PEGQ7CgYS630/QBONJGiBqHT+/NQ3iIPO5Yv+gQHx8QQnMSIOtX9DHn5//gSSGJTCzx85iY5h/serGWw3jMIAsLHZ1IoAJP7/Y/dCXzZL62pqXubUW6ZYEgjxzvrDK9IuCM2DIoD9JAGOdwgcP6fCXd4hIHcQAEDgehhs8i4B2b4VgBVIa2l50BTWo6sfQIt5fqVbARbpUgZUy9/Tm+JM4CWw9HxCr6gg8hKkln+hF1COcAmons8Aq3D/UwqWHKMpSEWwADVH8cqWYFv8+9nhEsRSoE8/4/kHGkuEh/AAcCsq9vX3/0y6RHjAIuhzmH0JiNTW85MKy+EnXoAi8irwUiAb3BE2iWAvvz8LPKuUq8TY0BfIT0wmgYH2oUe+we0I7/2DMgk8KW4S5biNbYAWAT0REFV6Pk04CeVMgJBAGW5AgB1Pb3wf0lUCcoufBGokCAcsCBIX8GUCCXQj+T8YFjgJgkNi2IuBrhE4RgyCNBh4UyJwEoUbboMGbnWBwAY68jafe/yywA4aIvU8cVkgnZzGwJm41b/f2NzlosHAmopw7khAWj7DinAB0JQHOiPHy/CJbwUsE4WAwCGQ2n9RKKwUCqdYPsUEMAQg2jyf0BUIHPI3ausrDI4pCAFaHHwFlgV0i55oYYH7AgGfQ8KVV0LMa3PqdAmGwD9rBES0wR1ybEZpkcCo07xF39cJiDr+BvvHtlBACs7E7eO2RmC+RurR1uhYKWAwCg/QmIQEWn4SbUwS2IgrEPBoa7aTU3GLC/Roc3pD620aDUILxmA4CMpX3T8RqLAO3MEVjc5nrlmAXlYmcEnV55nEJGB0L9jHNR3vCLzVSaB2uhset/BFZckTbq0+BbQYPw+k+FWt5VPM8wCNMjdwWV08E4yNL9OScRmeFyQ6sPAcAJzKH3hq2WIKpnh2uYksU/DCR+hkTy6d//uByeWGGsO+ojnfptEtcrBZwlu98I5jF0wtLQ96K1UFsfPxPX/Cgd4zPY71AuwpT3qnQOKPWJYK/Fu8HdQAAMAgDHySzL/gqWgOBQjozWc8PmTyKZeP2XzO54NGn3T6qNVnvTpsBmm3fLDzeb8FDph4aOSimQ+GTpp6YeymuR8Gj5h8YvSK2S+Gz9Es/fb4PeH/D/uo4cAfui4KAAAAAElFTkSuQmCC"
                        alt="" />
                    </div>

                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">USD
                      </div>
                      <div className="text-sm leading-5 text-gray-500">USD</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{fundBalances?.usdBalance}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">${fundValues?.usdValue}</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEVHcEz/miT5lRv5lBr4lBr3kxr4kxr4kxr3kxr9lxz937z6w4D4pkL++PH////+7Nf6tGH80Z1gLiRMAAAACnRSTlMADz9ehavC4f8dTtIi3wAAA9xJREFUeAG804mBBFEEBFA0VSX/hDeAnfM38wJwsyMeVxZAUiIJVF7h9hMeCeohIreriITeQMZeduozGzV0Ul9gtk2K0tcq5tJDRxD76fdL6NIt1XbLpbuYdi6oAQw7lBqSdqKhMej98U+vITXoYA2lcWWfc2gBfP/8ZipoagnbPuDUGvr8/se3AK3C/P/NfmNq2R+t5oH0OAhD4QQ3Amrc/7BbwraM/dtPMvumepo16EMNXUSklJ0qpVJ2Ko28gCwiXOqoy+gGkKSLxoDoB6DKW/r+MNgdMwYAoNINaO+P1t1BYQwCEZC7Afb+0P7REAxwBzgQkC4LOuGVu+IISFeG9IqFwKbN6ASBbg2iJURgdzM3IxQBnEMsBMhvaTOKItC1Rg7A5F+xBhHoSoEDaHKk4kWgaw3EIJUD9ejjQqAr+asA+VrsQaBr8ceAWlgulB16RYIgVZUzNcqw5mAWMDmVVrgwiKbBKufiimIYTUNyJTWXD7axBuDXcQsWIvRJ3fHdUNwHc77DgO3vBm7BHCtFy9HFp8b7EA2F42ewEOvSk1QBXIbnfQQ+IgR7nZAGIHBigQEQ3EXgNEY1CIJtEAJd7MNwAxiEEdiXDIpQmEYh0FXcFE4jEIifwPSYhyJA3lA0P5ahCDRvJFoe60gETD5ESDBe7yAgn61a86ej1R0G+KAqb9Ws7rNyhUqCLYYAIM3/w4AqqJgwA+IIAP8H9IggAKhkUI8tjsCXxnAxvDfY7kQB26GP4Y8bACQCawcFKeEGrAMSwb4gZXxQso5JBDUQhboBy6BEQE0+ZeCQYI4jcJ6JFGwPp2G1QLaAE6ZHiiOwU4l0h88wApeZijLUGm1xBHZiL4Yb1JiQNtv5WK/neIZ1pzM2n9RSrrse9lHYW7MUy4B2Xa0Y1pw+YzUIMMolhEEAAkXrLfo8KkbnxXNkLMha7fz/UtARTQoXYeWfotxaoCpIwMIAyYVYS1ENjY03aFDZx3B+NcgDiA+CRhDmAXxU6jSiAR7wj+upjGyL5sCjJWoAk+/xcnFWJK3p+f/N+XaZ/I/FVL8+DSX3u93qqkj4NEJoDbxcpsC+QP39v1b434lF7O129SBQ99YQmRlRfI8j+fcFGM760BLFEkWABu0zvaII5JBe+AoxhMCQdaptPAIggc6kOACBdGORiWq9jcA8YpXrBgIrsMwGlwcW3ywFMACMoGEAfG/eDq4AgAAYigGw/8Km6IsV2uuPDxp90umj1j+y3nJB2EzSbvDCqj7v98DBEw+PXDzz8dCJUi8wQvfcz4NHTz49epXsF8DnHcPXNU+/NX4H/P8BC2PKINdSx6oAAAAASUVORK5CYII="
                        alt="" />
                    </div>

                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">Bitcoin
                      </div>
                      <div className="text-sm leading-5 text-gray-500">BTC</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{fundBalances?.btcBalance}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">${fundValues?.btcValue}</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAHlBMVEVHcExifutkgOxifutifutifurAy/b///+Bl+6hsvK9JwfqAAAABXRSTlMAuT/fhRZUC3MAAAOZSURBVHjaxZsBsuQgCEQDKoH7X3jr79QWOz9mBmhn7AvwQqNR0aMm5k5ErbUxWmtE1JmPL4k7tTFVo86fDz7e6IMQ3NuIqfOm6K62mIFppEW8ODyEgIffh0ADEoHh+4DVkey3sUCNwc/H1UH3cRGaflwMpH+LDTSWiz4V33Q9Qcr+U8Lj8SPlJ6cYQAB/v56nyAAIwPhDfgAMIADr384fAFFgLGDj73wACDAaoflH/gHYohmJR0p6PgBSJgxeN/+fDmAjrmUFYA6QSgHBBeAJcADBf0w8cpJnAIN/zi1rgANkTWjLDHAA3ISsAVcAhUYCFaYABwBGAlCBDgDUITIFOACeAi5UoAO4yimgggEOUDKB4J+QA9RMYDQBDoCnoFCBLsFT0AEDHCBdh72+Dr0HKK1QGUiAAxRM4JID5zsASXsAVOAUQJMecMkAl9RTwHkHJAJgOQ8IMGAOILkdO1CBDlA0IVsCEgWwRBH0TAVGASRRBIQmwEop8CJoaAWqWrkOW6oGb7KvOkWIViEXDXDz9a+sZgLHAfQS3QGmDBoD6CUDngK5LJ2CfhCwEHeAKYKGhgEBOyEHmCOsBJAXE/9vmcVNoKNlDJCZdCKLmtCCAB4+AuAIqwDEw0cAHMHeA8QqUF5Ib2X2PgUhAJEkgOttCmIWWBlgVRFqDWDEihBEKIV3ABqumg9AfJ8JQ1JLAAwXDqAvfSiFd4Ae8l/dhwhAvKfXD47NhHZfCi/Ci6ErIidwBH0N8P+4scjGILwccB/0HuC5YiOL0sz/WKY+zLMf/RsfuRWJTYbkNPvR9Uhia3Y+dPXhJrxIcGvGyWX5ZUhes/9Q+IQi3yJ5jjUPLxpuG1B6a/Q8JGfZF7H4AUWvNCnUQ+r0Z5E4ouERJ5ghzMdm5qCw1fan9mLBYKmj0l7doetNeLHcQSWXD2lE5ysFTR6Xt/o5nbj5Ls22LztyUGYqv2T57uWew+rDRTuO6+lw8cqGRalvRwBBKb4nAD+yB47qqymwewCtdq/5251Thtr3eO+YwAsMOgcYYcFXOAy7wNAPF9y+BFqWSB3qFQC+zdVrBLABLvrORSZadZnNAZACwMug1LJ24WMRLAC8DMACwKdkbArGrxWfyYY9QIDcK/b46wmg+DiBApfbN1zv3/rAYfcTj72PXBojb8xwtd0PnXY/9dr92A0TDUi0+8Hj5iefux+9LhX87BcX97Y8+v6n3/sfv29//v8HwRsN0ET2sBAAAAAASUVORK5CYII="
                        alt="" />
                    </div>

                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">Ethereum
                      </div>
                      <div className="text-sm leading-5 text-gray-500">ETH</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{fundBalances?.ethBalance}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">${fundValues?.ethValue}</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full"
                        src="https://ftx.com/static/media/sol.4ee8884f.png"
                        alt="" />
                    </div>

                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">Solana
                      </div>
                      <div className="text-sm leading-5 text-gray-500">SOL</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{fundBalances?.solBalance}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">${fundValues?.solValue}</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full"
                        src="data:image/png;base64,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"
                        alt="" />
                    </div>

                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">Chainlink
                      </div>
                      <div className="text-sm leading-5 text-gray-500">LINK</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{fundBalances?.linkBalance}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">${fundValues?.linkValue}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Fund;