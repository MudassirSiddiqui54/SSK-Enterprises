import { BookOpen, Gauge, Wind, ArrowUpDown } from "lucide-react";

const DataCenterExpertise = () => {
  return (
    <section id="datacenters" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-highlight mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Center Engineering</h2>
          <div className="w-16 h-1 bg-highlight rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">What is a Data Center?</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              A data center is a purpose-built facility housing computer servers and networking
              equipment, designed with redundant power supplies, environmental controls, fire
              suppression, and physical security. Building one requires a consultative, standards-driven
              approach — not simply placing equipment in a room.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              SSK Enterprises designs and builds data centers ranging from compact rack-level server
              rooms to 500–1000 sq. ft. enterprise-grade facilities, with comprehensive monitoring,
              precision cooling, and advanced security systems.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-2">Standards We Follow</h3>
            {[
              { icon: Gauge, label: "IEEE", desc: "Power systems design and distribution standards" },
              { icon: Wind, label: "ASHRAE", desc: "Thermal guidelines for cooling and airflow management" },
              { icon: BookOpen, label: "Tier Classification", desc: "Data center redundancy and availability levels" },
            ].map((std) => (
              <div key={std.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-highlight/20 rounded flex items-center justify-center flex-shrink-0">
                  <std.icon className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <h4 className="font-semibold">{std.label}</h4>
                  <p className="text-sm text-primary-foreground/70">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <ArrowUpDown className="w-8 h-8 text-highlight flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Hot Aisle / Cold Aisle Containment</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">
                Improper airflow is the leading cause of server failures — two-thirds of failures occur in the
                top third of the rack due to thermal mixing. Our containment solutions establish optimal
                48″ cold aisle widths and minimum 36″ hot aisle widths with precision rack placement
                and perforated tile positioning.
              </p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Combined with sub-floor insulation and sealed perimeter walls, we minimize cold air loss
                and deliver consistent temperatures across all rack positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterExpertise;
