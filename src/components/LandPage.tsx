import {
  Button,
  Card,
  Flex,
  Heading,
  RadioGroup,
  ScrollArea,
  Select,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes";
import React from "react";

const LandPage: React.FC = () => {
  return (
    <div className="bg-image">
      {/*A flex container for the header navs*/}
      <Flex gap="9" justify="end" mr="5">
        <Button variant="outline">File</Button>
        <Button variant="outline">Container Transport</Button>
        <Button variant="outline">Admin</Button>
      </Flex>
      {/*Form section to take user input*/}
      <form action="/" method="post">
        <div className="flex mt-8 justify-around align-middle">
          <Flex gap="2" align="center">
            <label htmlFor="search">Search Container No.:</label>
            <input
              type="search"
              name="search"
              placeholder="Enter your search here"
            />
          </Flex>

          <Flex gap="2">
            <label htmlFor="date"> Gate In Date Period:</label>
            <input type="date" />
          </Flex>
          <Flex gap="2">
            <label htmlFor="from">From:</label>
            <input type="date" />
          </Flex>
          <Flex gap="2">
            <label htmlFor="to">To:</label>
            <input type="date" />
          </Flex>
        </div>
      </form>
      {/*Table section to compute user records*/}

      <Flex justify="center" mt="5">
        <Card>
            <Table.Root size="2">
              <Table.Header>
                <Table.ColumnHeaderCell>MIR</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Container Number</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Line Operator</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Driver</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>GateDate</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Going To</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>UserCode</Table.ColumnHeaderCell>
              </Table.Header>
              <Table.Row>
                <Table.RowHeaderCell>Vacant Cell 1</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 2</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 3</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 4</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 5</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 6</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 6</Table.RowHeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Vacant Cell 1</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 2</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 3</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 4</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 5</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 6</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 6</Table.RowHeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Vacant Cell 1</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 2</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 3</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 4</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 5</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 6</Table.RowHeaderCell>
                <Table.RowHeaderCell>Vacant Cell 6</Table.RowHeaderCell>
              </Table.Row>
            </Table.Root>
        </Card>
      </Flex>
      {/*Scroll area containing the addition of new entry*/}

      <div className="flex justify-around mt-10">
        <div>
          <ScrollArea type="always" scrollbars="vertical">
            <div className="flex flex-col">
              <Heading color="blue">
                <Text>New Entry</Text>
              </Heading>
              <Card mt="5">
                <fieldset>
                  <legend>BL and Container Details</legend>
                </fieldset>
                <Select.Root defaultValue="direct-gate-in">
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="direct-gate-in">
                      Direct Gate-In
                    </Select.Item>
                    <Select.Item value="direct-gate-out">
                      Direct Gate-Out
                    </Select.Item>
                    <Select.Item value="duration">Duration</Select.Item>
                  </Select.Content>
                </Select.Root>
                {/*Form fields for taking new entry records*/}
                <form action="/" method="post">
                  <div className="flex flex-col gap-6">
                    <div className="eir flex gap-5 mt-4">
                      <label htmlFor="eir">EIR No.</label>
                      <input
                        type="text"
                        name="eir"
                        placeholder="Enter eir here"
                      />
                    </div>
                    <div className="container flex gap-5">
                      <label htmlFor="container">EIR No.</label>
                      <input
                        type="text"
                        name="container"
                        placeholder="Enter container here"
                      />
                    </div>
                    <Flex gap="5">
                      <Text as="label">Size/ Type</Text>
                      <Select.Root defaultValue="sm">
                        <Select.Trigger />
                        <Select.Content>
                          <Select.Item value="sm">Small</Select.Item>
                          <Select.Item value="lg">Large</Select.Item>
                          <Select.Item value="md">Medium</Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </Flex>
                    <Flex gap="5">
                      <Text as="label">Line</Text>
                      <Select.Root defaultValue="mae">
                        <Select.Trigger />
                        <Select.Content>
                          <Select.Item value="mae">MAE</Select.Item>
                          <Select.Item value="mime">MIME</Select.Item>
                          <Select.Item value="ftp">FTP</Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </Flex>
                    <Flex gap="5">
                      <Text as="label">TEU</Text>
                      <TextField.Root placeholder="Enter TEU here.." />
                    </Flex>
                    <Flex gap="5" justify="end">
                      <Button>Save</Button>
                      <Button disabled>Print</Button>
                    </Flex>
                  </div>
                </form>
              </Card>
            </div>
          </ScrollArea>
        </div>
        {/*Form fields for trucking records*/}
        <form action="/">
          <fieldset>
            <legend>
              <Heading color="blue">Trucking Details</Heading>
            </legend>
            <Card>
                <div className="flex flex-col gap-5 mt-5">
                  <Flex gap="5">
                    <Text as="label" htmlFor="trucking">
                      Trucking Company
                    </Text>
                    <Select.Root defaultValue="apm">
                      <Select.Trigger />
                      <Select.Content>
                        <Select.Item value="apm">APM</Select.Item>
                        <Select.Item value="bpm">BPM</Select.Item>
                        <Select.Item value="cpm">CPM</Select.Item>
                        <Select.Item value="dpm">DPM</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                  <Flex gap="5">
                    <Text as="label" htmlFor="truck-no">
                      Truck No.
                    </Text>
                    <TextField.Root placeholder="Enter Truck No." name="truck-no" />
                  </Flex>
                  <Flex gap="5">
                    <Text as="label" htmlFor="driver-name">
                      Driver Name
                    </Text>
                    <TextField.Root
                      placeholder="Enter Driver Name"
                      name="driver-name"
                    />
                  </Flex>
                  <Flex gap="5">
                    <Text as="label" htmlFor="driver-phone">
                      Driver Tel No.
                    </Text>
                    <TextField.Root
                      placeholder="Enter driver phone number"
                      name="driver-phone"
                    />
                  </Flex>
                </div>
            </Card>
          </fieldset>
          <Flex gap="5" justify="start" mt="5">
            <Button variant="soft">Update</Button>
            <Button variant="soft">Delete</Button>
            <Button variant="soft">Returned</Button>
          </Flex>
        </form>
        {/*Form field to take Destination details*/}
        <form action="">
          <fieldset>
            <legend>
              <Heading color="blue">Destination Details</Heading>
            </legend>
            <Flex gap="5" mt="2">
              <Text as="label" htmlFor="going-to">
                Going To:
              </Text>
              <TextField.Root placeholder="Enter Destination..." />
            </Flex>
            <Flex gap="5">
              <Text as="label" htmlFor="gate-pass-no">
                Gate Pass No.:
              </Text>
              <TextField.Root
                name="gate-pass-no"
                placeholder="Enter Gate Pass No"
              />
            </Flex>
          </fieldset>
          <Card mt="5">
            <Flex justify="center" align="center" direction="column" gap="2">
              <Heading color="blue" className="underline">
                Print Copy
              </Heading>
              <RadioGroup.Root>
                <RadioGroup.Item value="terminal">Terminal</RadioGroup.Item>
                <RadioGroup.Item value="customer">Customer</RadioGroup.Item>
                <RadioGroup.Item value="transporter">
                  Transporter
                </RadioGroup.Item>
                <RadioGroup.Item value="security">Security</RadioGroup.Item>
              </RadioGroup.Root>
              <Button variant="soft" mt="5">
                Exit
              </Button>
            </Flex>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default LandPage;
